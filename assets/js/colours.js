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
  
  document.querySelector(".palette line:nth-child(1)")
    .style.stroke = colors[0];
  document.querySelector(".palette line:nth-child(2)")
    .style.stroke = colors[1];
  document.querySelector(".palette line:nth-child(3)")
    .style.stroke = colors[2];