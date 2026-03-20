function validateProduct(data) {
  const { campo1, campo2, campo3, campo4, campo5, campo6 } = data;

  if (
    campo1 === undefined ||
    campo2 === undefined ||
    campo3 === undefined ||
    campo4 === undefined ||
    campo5 === undefined ||
    campo6 === undefined
  ) {
    return "Todos los campos campo1-campo6 son obligatorios";
  }

  if (typeof campo1 !== "string" || campo1.trim() === "") {
    return "campo1 debe ser un string no vacío";
  }

  if (typeof campo2 !== "string" || campo2.trim() === "") {
    return "campo2 debe ser un string no vacío";
  }

  if (typeof campo3 !== "string" || campo3.trim() === "") {
    return "campo3 debe ser un string no vacío";
  }

  if (!Number.isInteger(campo4)) {
    return "campo4 debe ser un integer";
  }

  if (typeof campo5 !== "number" || Number.isNaN(campo5)) {
    return "campo5 debe ser un number";
  }

  if (typeof campo6 !== "boolean") {
    return "campo6 debe ser un boolean";
  }

  return null;
}

module.exports = { validateProduct };