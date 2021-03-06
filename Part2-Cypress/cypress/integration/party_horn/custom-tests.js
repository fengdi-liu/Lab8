describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(el => expect(el).to.have.value(75));
  });

  it('Input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(el => expect(el).to.have.value(33));
  });

  it('Audio changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(el => expect(el).to.have.prop('volume',0.33));
  });

  it('Image and sound source change when party horn radio button changes', () => {
    cy.get('#radio-air-horn').trigger('input');
    cy.get('#sound-image').then(el => expect(el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/images/air-horn.svg'));
  });

  it('Volume image changes 0', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#volume-image').then(el => expect(el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg'));
  });

  it('Volume image changes 1', () => {
    cy.get('#volume-number').clear().type('32');
    cy.get('#volume-image').then(el => expect(el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg'));
  });

  it('Volume image changes 2', () => {
    cy.get('#volume-number').clear().type('34');
    cy.get('#volume-image').then(el => expect(el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg'));
  });

  it('Volume image changes 3', () => {
    cy.get('#volume-number').clear().type('100');
    cy.get('#volume-image').then(el => expect(el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg'));
  });

  it('Honk button disable when volume is 0', () => {
    cy.get('#volume-number').clear().type('foo bar');
    cy.get('#honk-btn').then(el => expect(el).to.have.attr('disabled'));
  });

  it('Error will show if number is too large', () => {
    cy.get('#volume-number').clear().type('101');
    cy.get('#volume-number:invalid').then(el => expect(el).to.have.value('101'));
  });


});
