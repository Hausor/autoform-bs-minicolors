describe "client side tests", ->
  beforeEach (done) ->
    @div = document.createElement("div")
    Template.formWrapper.rendered = -> done()
    Blaze.render(Template.formWrapper, @div)


  it "renders minicolors as a input", ->
    expect($(@div).find(".minicolors-swatch-color").length).to.equal(1)

  it "hides picker by default", ->
    expect($(".minicolors-slider-hue").is(":visible")).not.to.beTrue

  it "shows color picker after clicked", ->
    $(@div).find("input").focus().focus()
    expect($(".minicolors-slider-hue").is(":visible")).to.beTrue