const venuePhotoOverrides = {
  "Radisson Blu MBD Hotel": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  "Savoy Suites": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
  "Imperial Hotel": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
  "Gulmohar club": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
"Umaid Bhawan": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgsWQe72lypoQLtcKs3SpIK41DVdIreWRQ9HZtMKCODVXt93biLWPZzs9&s=10",
"Holiday Inn" : "https://b.zmtcdn.com/data/pictures/3/21228963/42a9e310303c860f1470679550c65e2f.jpg?fit=around|960:500&crop=960:500;*,*",
"Jasvilas" : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/8a/e0/72/caption.jpg?w=1200&h=1200&s=1",
"The Oberoi Rajvilas" : "https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/rajvilas-new/offer/desktop820x646/unforgettable_holidays.jpg",
"Devi Niketan Heritage Hotel" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWvvTbn1gNBBA1-Hd1Jv7q1JRjb59MFBj2CHNz4Fyzdeas0rh_5KVA1Bw&s=10",
"Shahpura House" : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/04/fe/40/facade.jpg?w=900&h=-1&s=1",
"Park Ocean" : "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/20160416162101347-864f924a-d61a-4656-8659-d04d6b509c03.jpg",
"Dera Rawatsar - Heritage Hotel" : "https://cdn.audleytravel.com/255/182/79/15974922-royal-heritage-haveli-jaipur.webp",
"pearl palace hotel ": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ef/fa/62/pearl-palace-heritage.jpg?w=900&h=500&s=1",
"Jaipur Inn" : "https://media-cdn.tripadvisor.com/media/photo-s/19/83/92/66/hotel-view.jpg",
"Jwala Niketan": "https://a.hwstatic.com/image/upload/f_auto,q_auto,t_30/propertyimages/3/306619/ukuwvexg0biefupu83cp.jpg",
"Devraj Niwas - Boutique Hotel" : "https://foto.hrsstatic.com/fotos/0/2/800/458/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F6%2F2%2F2%2F0%2F622017%2F622017_rt_29540859.jpg/sEUhYoWngcWb3FAcKYrvyQ%3D%3D/333%2C500/6/Devraj_Niwas_Boutique_Hotel-Jaipur-Restaurant-66-622017.jpg",
"Alsisar's Haveli" :"https://static.wixstatic.com/media/e0ce5d_fb872945ae0741439993da11be82eeee~mv2.jpg/v1/fill/w_1920,h_1189,al_c/e0ce5d_fb872945ae0741439993da11be82eeee~mv2.jpg",
"Hotel Om Tower":"https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_468/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/7/7/b0141683-4ed8-4c51-8683-bafc770bac14_image1749b6d1cd8fc4a9ca9bc8be9d122af6c.JPG",
"Jypore Saffron Inn And Suites":"https://collection-o-jypore-saffron.hotels-rajasthan.com/data/Pics/OriginalPhoto/14881/1488112/1488112081/collection-o-jypore-saffron-jaipur-pic-22.JPEG",
"Hari Mahal Palace":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Whh0bNMqVNUUx79YmUvE1TGUEqD_rCYUQimesbDGR4QqGylAkVJCAx8q&s=10",
"CLMM Hotel":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/198899209.jpg?k=47ba3c414679bd0c47af7d0959d0d1061f4f0e9334f0e4273544e978575cf872&o=",
"Bissau Palace Hotel" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyseaHUOqckcRRe7UgEbBs1bSaIa5FZIyN6ybSaBVhrnJM9sAT40ARCTQ&s=10",
"Pearl Palace Heritage" : "https://cf.bstatic.com/xdata/images/hotel/max1024x768/65241780.jpg?k=d7d7a5efd33d0f29f26d56da9e6112a3c224868420fc2815b04c346c2f90c574&o=",
"Royal orchid" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfApL4OfTmQ4HkdmEJ9WBwnqVniw3d_E72oWLrYCswSQ&s",
"Golden Inn": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/c7/8c/71/golden-inn-hotel.jpg?w=1200&h=1200&s=1",
"Chitra Katha" : "https://q-xx.bstatic.com/xdata/images/hotel/max500/107879545.jpg?k=35917d974b16fe674f4d0fde5852023b5423a564d09adefa22d348c22d721b5e&o=",
"Jai Mangal Palace" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3v_HBLkHgEH5r6ac1VlHK-et2LQDY1_S4aPE1YxKFXfGnHs3bjvL4hfQ&s=10",
"Hotel Shalimar" : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/fc/19/a3/hotel-shalimar.jpg?w=1000&h=1000&s=1",
"The Oberoi Rajvilas" : "https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/Offers/offers/desktop820x646/exclusive_offer_for_members_rajvilas_desktop.jpg",
"Pearl Palace Hotel":"https://www.hotelscombined.com/rimg/himg/98/5b/a9/expedia_group-2330709-40dca4-948011.jpg?width=968&height=607&crop=true",
};

/**
 * Case-insensitive lookup — returns the image URL for a venue name,
 * or null if no manual override has been added for it.
 */
export function getManualVenuePhoto(venueName) {
  if (!venueName) return null;

  const match = Object.keys(venuePhotoOverrides).find(
    (key) => key.toLowerCase() === venueName.toLowerCase()
  );

  return match ? venuePhotoOverrides[match] : null;
}

export default venuePhotoOverrides;
