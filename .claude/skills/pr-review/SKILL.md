---
name: pr-review
description: Reviews the current diff (staged/unstaged or a given PR) for correctness bugs, React/TS anti-patterns, and simplification opportunities in this todo app. Use when the user asks to review a PR, review a diff, or review "what I just wrote" before considering it done.
---

# PR Review

This is a machine-coding practice repo (React + TypeScript + Tailwind), not production —
so review as an interviewer would: correctness first, then patterns an interviewer
specifically probes for, then simplicity. Do not suggest production-scale infra
(CI pipelines, test frameworks, monitoring) unless asked.

## 1. Get the diff

```
git diff HEAD          # unstaged + staged
git diff --stat HEAD   # if the diff is large, scope down first
```

If reviewing a GitHub PR instead, use `gh pr diff <n>`.

## 2. Check in this order, stop noting issues once a category is clean

**Correctness**

- State updates that mutate instead of replace (`array.push` vs `[...array, x]`)
- Stale closures in event handlers / effects referencing old state
- Missing/incorrect `key` props on list items (index-as-key when list can reorder)
- Off-by-one or wrong-branch logic in filters, toggles, edit/save flows
- localStorage/storage utils: JSON.parse without try/catch on malformed data

**React/TS patterns (what an interviewer flags)**

- Uncontrolled vs controlled input mismatches
- Derived state stored redundantly instead of computed inline
- Missing memoization where a child re-renders needlessly on every keystroke
  (only flag if it's actually visible in the diff's component tree, not speculative)
- Prop drilling more than 2 levels deep — note where a hook or context would help
- `any` types or missing types on function params/return values in `src/types/todo.ts` usage
- Custom hooks (`src/hooks/`) not following the `useX` naming or violating rules of hooks

**Simplification**

- Duplicate logic that exists elsewhere in the diff or nearby files
- Unnecessary abstraction for a one-off case
- Dead code / unused imports introduced by the change

## 3. Report format

For each finding: `file:line — issue — why it matters — one-line fix direction`.

Do not apply the fixes directly — this repo's convention is to explain/diagnose and let
the user type the fix themselves (interview practice). List findings, ranked most
important first; end with a one-line verdict (ready / needs the above first).
