import { expect } from 'chai';
import { describe, it } from 'mocha';
import { myFeed, firstFeedSubscriptor, secondFeedSubscriptor } from '../dist/index.js';

describe('Notifier', () => {
  describe('First Subcriptor', () => {
    it('Debe subcribirse', () => {
      const expectedResult = true;
      myFeed.subscribe(firstFeedSubscriptor)
      expect(myFeed.getSubcriptors().includes(firstFeedSubscriptor)).to.deep.equal(expectedResult)
    });
    it('Debe intentar subcribirse otra vez', () => {
      const expectedResult = false;
      expect(myFeed.subscribe(firstFeedSubscriptor)).to.deep.equal(expectedResult)
    });
    it('Debe recibir una notificacion', () => {
      const expectedResult = true
      expect(myFeed.onRelease()).to.deep.equal(expectedResult)
    });
  });

  describe('Second Subcriptor', () => {
    it('Debe subcribirse', () => {
      const expectedResult = true;
      myFeed.subscribe(secondFeedSubscriptor)
      expect(myFeed.getSubcriptors().includes(secondFeedSubscriptor)).to.deep.equal(expectedResult)
    });
    it('Debe intentar subcribirse otra vez', () => {
      const expectedResult = false;
      expect(myFeed.subscribe(secondFeedSubscriptor)).to.deep.equal(expectedResult)
    });
    it('Debe desubcribirse', () => {
      const expectedResult = false
      myFeed.unsubscribe(secondFeedSubscriptor)
      expect(myFeed.getSubcriptors().includes(secondFeedSubscriptor)).to.deep.equal(expectedResult)
    });
  });

  describe('My DSI Feed', () => {
    it('Debe de enviar los release', () => {
      const expectedResult = true;
      expect(myFeed.onRelease()).to.deep.equal(expectedResult)
    })
  })
});
