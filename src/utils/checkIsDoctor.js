const checkIfDoctor = (email) => {
    return email.toLowerCase().startsWith('dr.');
  };
export default checkIfDoctor;