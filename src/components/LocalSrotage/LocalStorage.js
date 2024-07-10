const getValueFromLocalstorage = () => {
  const appliedJob = localStorage.getItem("applied-job");
  if (appliedJob) {
    return JSON.parse(appliedJob);
  }
  return [];
};
const saveOfLocalStorage = (id, setToast, showtoast) => {
  const appliedJob = getValueFromLocalstorage();
  const isInclude = appliedJob.find((idx) => idx === id);

  if (!isInclude) {
    setToast(true);
    showtoast(true);
    appliedJob.push(id);
    localStorage.setItem("applied-job", JSON.stringify(appliedJob));
  } else {
    setToast(false);
    showtoast(false);
  }
};

export { getValueFromLocalstorage, saveOfLocalStorage };
