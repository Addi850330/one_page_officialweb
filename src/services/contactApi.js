export const submitContactForm = async (formData) => {
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSfohpJNcMPcZD7tYa-z2XdFLIHD-mj7VritO2qe9XUHER17-g/formResponse";

  const formBody = new URLSearchParams({
    "entry.1126294228": formData.company,
    "entry.1992320245": formData.title,
    "entry.1824689020": formData.name,
    "entry.1114379660": formData.phone,
    "entry.1295471230": formData.email,
    "entry.1236509909": formData.project,
    "entry.159947026": formData.message,
  });

  await fetch(formUrl, {
    method: "POST",
    body: formBody,
    mode: "no-cors",
  });
};
