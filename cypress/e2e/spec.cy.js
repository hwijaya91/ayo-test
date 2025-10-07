/// <reference types="cypress" />

describe('Studi Kasus 1', () => {

  let bookings;
  let priceSched;
  let message;

  before(() => {
    // Ambil data dari fixtures
    cy.fixture('booking.json').then((data) => {
      bookings = data;
    });
    cy.fixture('priceSched.json').then((data) => {
      priceSched = data;
    });
  });

  // Pengecekan double booking pada venue & date & start_time & end_time yang sama
  it('Cek double booking', () => {
    let dataDobel = false; // flag untuk menandakan bahwa ada data double
    for (let i = 0; i < bookings.length; i++) {
      for (let j = i + 1; j < bookings.length; j++) {
        if (
          bookings[i].venue_id === bookings[j].venue_id && 
          bookings[i].date === bookings[j].date &&
          bookings[i].start_time === bookings[j].start_time && 
          bookings[i].end_time === bookings[j].end_time
        ) {
        message = `Data dobel antara ${bookings[i].booking_id} dengan ${bookings[j].booking_id} `
        dataDobel = true;
        }//tutup if
      }//tutup for j
    }//tutup for i
    // cy.log(message) //print booking id yang dobel
    // -----------------------------------------------------------------
    expect(dataDobel,message).to.be.false // ---> ini untuk assertion
    // -----------------------------------------------------------------
  });

  // Memastikan harga sudah sesuai
  it('Cek harga booking', () => {
    let flag = true; //flag untuk menandakan bahwa harganya tidak sesuai
    for(let x = 0 ; x < bookings.length ; x++){
     const booking = bookings[x];
     for(let y = 0 ; y < priceSched.length ; y++){
      const harga = priceSched[y];
      //kalo datanya sama
      if( harga.venue_id === booking.venue_id &&
          harga.date === booking.date &&
          harga.start_time === booking.start_time &&
          harga.end_time === booking.end_time
        ){
          //kalau ada harga yang tidak sesuai
          if(harga.price !== booking.price) { 
            message = `Harga tidak sesuai pada booking_id ${booking.booking_id} dimana yang seharusnya ${harga.price} menjadi ${booking.price}`
            flag = false;
          }
        }//tutup if
      }//tutup for y 
    }//tutup for x
    // cy.log(message) // print harga yang tidak sesuai 
    // -----------------------------------------------------------------
    expect(flag,message).to.be.true // ---> ini untuk assertion
    // -----------------------------------------------------------------
  });//tutup it
});
