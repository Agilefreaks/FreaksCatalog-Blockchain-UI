export function parseFreaks({ _nume, _score }) {
  const names = _nume.map((name) => ({ name }));

  _score.slice(0, names.length).forEach((score, index) => {
    names[index] = { ...names[index], share: score };
  });

  return names;
}
