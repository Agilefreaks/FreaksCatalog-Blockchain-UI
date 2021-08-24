export function parseFreaks({ _name, _score }) {
  const names = _name.map((name) => ({ name }));

  _score.slice(0, names.length).forEach((score, index) => {
    names[index] = { ...names[index], share: score };
  });

  return names;
}
