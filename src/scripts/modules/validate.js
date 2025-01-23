function validateForm(form) {
  console.log(form.elements);
  const errors = [];

  // Validate required fields
  const requiredFields = form.querySelectorAll("[required]");
  requiredFields.forEach((field) => {
    if (!field.value) {
      errors.push(`${field.name} is required.`);
    }
  });

  return errors;
}

export { validateForm };
