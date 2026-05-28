  //                                               ______________
  // _____________________________________________/ LoadFormData \____________ 

  const LoadFormData = (formData, defaultValues) => {
    const id = formData.get().get().id;

      if (!id) {
          console.log('form Id was not initilized.');
          return
      }

      Object.entries(formData.get()).forEach(([key, value]) => {
          let el = document.getElementById(id+'-'+key)
          if (el !== null) {

              if (el.type === 'checkbox') {
                  formData.set(key, el.checked);
              } else {
                  if (el.value.length > 0) {
                      formData.set(key, el.value);
                  } else {
                      formData.set(key, defaultValues[key]);
                  }

              }
          }
      });
  }

  export default LoadFormData;