  //                                               ______________
  // _____________________________________________/ LoadFormData \____________ 

  const LoadFormData = (formData, defaultValues) => {
    const id = formData.get().get().id;
    let hasChanged = false;

      if (!id) {
          console.log('form Id was not initilized.');
          return false;
      }

      Object.entries(formData.get()).forEach(([key, value]) => {
          let el = document.getElementById(id+'-'+key)
          if (el !== null) {

              if (el.type === 'checkbox') {
                  if (value !== el.checked) {
                      formData.set(key, el.checked);
                      hasChanged = true;
                  }
              } else {
                  const nextValue = el.value.length > 0 ? el.value : defaultValues[key];
                  if (value !== nextValue) {
                      formData.set(key, nextValue);
                      hasChanged = true;
                  }
              }
          }
      });

      return hasChanged;
  }

  export default LoadFormData;
