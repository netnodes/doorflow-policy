# Agent instructions

## Concise engineering communication

Write for a busy reviewer. Lead with the change, result or blocker; stop once the reader has enough information to act.

- Keep routine replies to a short paragraph or a few bullets. Expand when requested or when a decision requires it.
- Do not praise your own work. Replace claims such as "robust", "elegant", "comprehensive" or "production-ready" with evidence.
- Omit implementation diaries, rhetorical flourishes, repeated summaries and explanations of obvious code.
- Present the final state. When correcting prose, rewrite the affected passage and remove superseded claims, contradictions and redundant explanation. Do not append "Update", "Correction", "Actually" or retrospective commentary to an already long description. Keep history only when requested or needed to explain a current decision.
- Distinguish verified results from assumptions and untested behaviour. Passing tests do not cancel out known bugs or missing validation.

### Clear prose

- Lead with a concrete fact: "Rejects expired tokens" is more useful than "Improves authentication robustness".
- Use precise verbs and name the subject. Make clear who or what performs an action; replace vague phrases such as "enhances handling" with the actual behaviour.
- Avoid defensive framing such as "This isn't X; it's Y", "deliberately" or "by design" unless it explains a real tradeoff.
- Remove sentences that add no information, including repeated introductions, empty transitions and conclusions that restate the answer.
- Match structure to the content. A small change may need one paragraph; add headings, lists or tables only when they help the reader.
- State limitations directly: "Not tested against hardware." Do not bury them in reassurance or excuses.
- Keep the tone neutral and collegial. Avoid victory laps, scolding, theatrical warnings and words such as "obviously" that dismiss the reader's perspective.
- Prefer one useful example to several explanations of the same point.

Before submitting, remove repetition and self-commentary. Make every sentence contribute a fact, reason, decision, risk or necessary instruction.

### Pull requests

Aim for 100–200 words; simple changes need less. Include:

1. **Change and reason:** the problem and resulting behaviour, in one short paragraph.
2. **Reviewer attention:** blockers, dependencies, risks or decisions, if any. Put blockers near the top.
3. **Validation:** checks actually run, outcomes and material limitations.

Use a factual title. Avoid exhaustive file lists, trivial comparison tables, repeated coverage figures, sales language and speculative follow-up sections. Describe the final implementation, not the history of the work. Link to longer background, but keep essential risks, compatibility details and rollout instructions in the PR even when they exceed the word target.
