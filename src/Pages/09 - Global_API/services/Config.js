const RootPath = async (path = "") => {
  const Ports = await fetch("/config/ports.json")
    .then((response) => response.json())
    .then((json) => json);

  switch (path) {
    case "Backend_Interaction":
      return `http://localhost:${Ports.Backend_Interaction}`;

    case "React_Router_Basic":
      return `http://localhost:${Ports.React_Router_Basic}`;

    case "React_Router_Params":
      return `http://localhost:${Ports.React_Router_Params}`;

    case "Redux_Implementation":
      return `http://localhost:${Ports.Redux_Implementation}`;

    default:
      return "";
  }
};

export default RootPath;
