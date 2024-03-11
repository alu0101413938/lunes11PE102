import { expect } from 'chai';
import { describe, it } from 'mocha';
import * as pe from '../src/index'

describe('Notifier', () => {
  describe('First Subcriptor', () => {
    it('Debe subcribirse', () => {
      const expectedResult = true;
      pe.myFeed.subscribe(pe.firstFeedSubscriptor)
      expect(pe.myFeed.getSubcriptors().includes(pe.firstFeedSubscriptor)).to.deep.equal(expectedResult)
    });
    it('Debe intentar subcribirse otra vez', () => {
      const expectedResult = false;
      expect(pe.myFeed.subscribe(pe.firstFeedSubscriptor)).to.deep.equal(expectedResult)
    });
    it('Debe recibir una notificacion', () => {
      const expectedResult = true
      expect(pe.myFeed.onRelease()).to.deep.equal(expectedResult)
    });
  });

  describe('Second Subcriptor', () => {
    it('Debe subcribirse', () => {
      const expectedResult = true;
      pe.myFeed.subscribe(pe.secondFeedSubscriptor)
      expect(pe.myFeed.getSubcriptors().includes(pe.secondFeedSubscriptor)).to.deep.equal(expectedResult)
    });
    it('Debe intentar subcribirse otra vez', () => {
      const expectedResult = false;
      expect(pe.myFeed.subscribe(pe.secondFeedSubscriptor)).to.deep.equal(expectedResult)
    });
    it('Debe desubcribirse', () => {
      const expectedResult = false
      pe.myFeed.unsubscribe(pe.secondFeedSubscriptor)
      expect(pe.myFeed.getSubcriptors().includes(pe.secondFeedSubscriptor)).to.deep.equal(expectedResult)
    });
  });

  describe('My DSI Feed', () => {
    it('Debe de enviar los release', () => {
      const expectedResult = true;
      expect(pe.myFeed.onRelease()).to.deep.equal(expectedResult)
    })
  })
});
