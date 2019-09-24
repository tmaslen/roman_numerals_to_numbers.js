'use strict'

const expect = require( "chai" ).expect;

const romanNumeralsToNumber = require( "./index" );

describe( "find vowels", () => {

    it( "returns an array of vowels in parameter", () => {

        expect( romanNumeralsToNumber( "I",    1 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "II",   2 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "III",  3 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "IV",   4 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "V",    5 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "VI",   6 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "VII",  7 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "VII",  8 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "IX",   9 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "X",    10 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "XXIV", 24 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "XL",   40 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "XC",   90 ) ).to.equal( true );
        expect( romanNumeralsToNumber( "DCC",  700 ) ).to.equal( true );

    });

});