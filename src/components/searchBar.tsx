"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type Option = string | { label: string; value: string };

const DEFAULT_OPTIONS: Option[] = [
  "University room",
  "Studio",
  "1 Bedroom",
  "2 Bedrooms",
  "House",
  "Shared room",
];

const norm = (opts: Option[]) =>
  opts.map(o => (typeof o === "string" ? { label: o, value: o } : o));

type MultiSelectProps = {
  label?: string;
  options?: Option[];
  value?: string[];                   // optional controlled value
  onChange?: (values: string[]) => void;
  placeholder?: string;
  className?: string;
};

export default function SearchBar({
  label = "I'm looking for:",
  options = DEFAULT_OPTIONS,
  value,
  onChange,
  placeholder = "Select one or more…",
  className = "",
}: MultiSelectProps) {
  const opts = useMemo(() => norm(options), [options]);

  // controlled/uncontrolled
  const [internal, setInternal] = useState<string[]>(value ?? []);
  const selected = value ?? internal;
  useEffect(() => {
    if (value) setInternal(value);
  }, [value]);

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? opts.filter(o => o.label.toLowerCase().includes(q)) : opts;
  }, [opts, query]);

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const onClickAway = (e: MouseEvent) => {
      if (
        panelRef.current?.contains(e.target as Node) ||
        buttonRef.current?.contains(e.target as Node)
      ) return;
      setOpen(false);
    };
    document.addEventListener("mousedown", onClickAway);
    return () => document.removeEventListener("mousedown", onClickAway);
  }, [open]);

  function commit(values: string[]) {
    if (onChange) onChange(values);
    else setInternal(values);
  }

  function toggle(v: string) {
    const next = selected.includes(v)
      ? selected.filter(x => x !== v)
      : [...selected, v];
    commit(next); // INSTANT APPLY
  }

  function removeChip(v: string) {
    if (!selected.includes(v)) return;
    commit(selected.filter(x => x !== v)); // INSTANT APPLY
  }

  function handleKeyboard(e: React.KeyboardEvent) {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[activeIndex]) {
      e.preventDefault();
      toggle(filtered[activeIndex].value);
    } else if (e.key === "Escape") {
      setOpen(false);
      buttonRef.current?.focus();
    }
  }

  return (
    <form className={`w-full ${className}`} onKeyDown={handleKeyboard}>
      <div className="max-w-4xl flex items-center gap-3 bg-white border border-gray-300 rounded-xl p-3 shadow-sm">
        <label className="shrink-0 text-sm font-medium text-gray-800 px-2 py-2 border border-gray-300 rounded-lg">
          {label}
        </label>

        {/* Selected chips */}
        <div className="flex flex-wrap items-center gap-2 min-h-10 flex-1">
          {selected.length === 0 ? (
            <span className="text-gray-400 text-sm">{placeholder}</span>
          ) : (
            selected.map(v => {
              const lab = opts.find(o => o.value === v)?.label ?? v;
              return (
                <span
                  key={v}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm bg-blue-50 text-blue-700 border border-blue-200"
                >
                  {lab}
                  <button
                    type="button"
                    aria-label={`Remove ${lab}`}
                    className="rounded-full p-0.5 hover:bg-blue-100"
                    onClick={() => removeChip(v)} // INSTANT APPLY
                  >
                    ✕
                  </button>
                </span>
              );
            })
          )}
        </div>

        {/* Trigger */}
        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => {
              setQuery("");
              setActiveIndex(0);
              setOpen(o => !o);
            }}
            aria-haspopup="listbox"
            aria-expanded={open}
            className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-sm font-medium"
          >
            {selected.length > 0 ? `${selected.length} selected` : "Choose"}
            <svg
              className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
            </svg>
          </button>

          {/* Dropdown */}
          {open && (
            <div
              ref={panelRef}
              role="listbox"
              aria-label="Select room types"
              className="absolute right-0 z-50 mt-2 w-80 rounded-xl border border-gray-200 bg-white shadow-lg"
            >
              {/* Search */}
              <div className="p-2 border-b border-gray-100">
                <input
                  autoFocus
                  value={query}
                  onChange={e => {
                    setQuery(e.target.value);
                    setActiveIndex(0);
                  }}
                  placeholder="Filter options…"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Options */}
              <ul className="max-h-56 overflow-auto py-1">
                {filtered.length === 0 && (
                  <li className="px-3 py-2 text-sm text-gray-500">No matches</li>
                )}
                {filtered.map((o, i) => {
                  const checked = selected.includes(o.value);
                  const active = i === activeIndex;
                  return (
                    <li key={o.value}>
                      <button
                        type="button"
                        onMouseEnter={() => setActiveIndex(i)}
                        onClick={() => toggle(o.value)} // INSTANT APPLY
                        className={`w-full text-left flex items-center gap-2 px-3 py-2 text-sm ${
                          active ? "bg-blue-50" : ""
                        }`}
                        aria-selected={checked}
                      >
                        <input
                          type="checkbox"
                          readOnly
                          checked={checked}
                          className="h-4 w-4 rounded border-gray-300"
                        />
                        <span className="flex-1 text-gray-800">{o.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
