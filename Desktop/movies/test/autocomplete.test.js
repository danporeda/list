it('Shows an autocomplete', () => {
  createAutoComplete({
    root: document.querySelector('#target'),
    fetchData() {
      return [
        { Title: 'Avengers'},
        { Title: 'Spider Man'},
        { Title: 'Dark Knight'}
      ];
    },
    renderOption(movie) {
      return movie.Title;
    }
  });

  const dropdown = document.querySelector('.dropdown');
  
  expect(dropdown.className).not.to.include('is-active');
});