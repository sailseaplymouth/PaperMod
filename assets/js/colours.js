const colors = Please.make_scheme(
    {
      h: 99,
      s: .5,
      v: .85
    },
    {
      scheme_type: 'triadic',
      format: 'hex'
    }
  );
  
  document.querySelector(".palette div:nth-child(1)")
    .style.backgroundColor = colors[0];
  document.querySelector(".palette div:nth-child(2)")
    .style.backgroundColor = colors[1];
  document.querySelector(".palette div:nth-child(3)")
    .style.backgroundColor = colors[2];