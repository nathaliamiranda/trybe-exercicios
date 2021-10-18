const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it ('uppercase "nathalia" to equal "NATHALIA"', (done) => {
  uppercase('nathalia', (str) => {
    try {
    expect(str).toBe('NATHALIA');
    done();
  } catch (error) {
    done(error);
  }
})
});
