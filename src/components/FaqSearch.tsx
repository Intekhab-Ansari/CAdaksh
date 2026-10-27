'use client';

import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

interface FaqGroup {
  category: string;
  items: FaqItem[];
}

export default function FaqSearch({ groups }: { groups: FaqGroup[] }) {
  const [query, setQuery] = useState('');

  const filteredGroups = groups.map(group => {
    if (!query.trim()) return group;
    const lower = query.toLowerCase();
    const matchingItems = group.items.filter(
      item => item.q.toLowerCase().includes(lower) || item.a.toLowerCase().includes(lower)
    );
    return { ...group, items: matchingItems };
  }).filter(group => group.items.length > 0);

  return (
    <>
      <div className="search-box-wrap" style={{ marginTop: '2rem' }}>
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search questions (e.g., 'advance tax', 'GSTR-2B', 'audit limit', 'NRI')..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {filteredGroups.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--ink-muted)' }}>
            No questions found matching &quot;{query}&quot;. Try another term.
          </p>
        ) : (
          filteredGroups.map((group) => (
            <div key={group.category} className="faq-group">
              <h2 style={{ fontSize: '1.6rem', marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '2px solid var(--brass)' }}>
                {group.category}
              </h2>
              <div className="qa-accordion">
                {group.items.map((item, idx) => (
                  <details key={idx} className="qa-item" open={query.trim().length > 0 ? true : undefined}>
                    <summary>{item.q}</summary>
                    <div className="qa-content">
                      <p>{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
