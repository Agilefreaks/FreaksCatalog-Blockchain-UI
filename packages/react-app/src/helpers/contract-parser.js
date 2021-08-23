export function parseFreaks({ _name, _scor }) {
  const names = _name.map((name) => ({ name }));

  _scor.slice(0, names.length).forEach((scor, index) => {
    names[index] = { ...names[index], share: scor };
  });

  return names;
}
