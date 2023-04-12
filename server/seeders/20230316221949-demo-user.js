'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('Products', [
        {
       title: 'Flying Vegan Harvest',
       description:'Vegan Miso Broth: Meat made from plants, tofu, bean sprouts, broccolini, green onion, corn, red onion, crispy garlic and chili seasoning » served with thick noodles',
       price:10,
       image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/flyingveganharvest-1.png',
       category:'ramen',
       vegan:true
      }, 
      {
        title: 'Spicy Creamy Vegan Ramen',
        description:'Vegetable broth: tofu, onion, green onion, spinach, crispy onion, garlic chips, garlic oil, chili oil and sesame seeds » served with thick noodles',
        price:9,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/09/jrb_spicy-creamy-vegan_21_01_36_rgb_600x600.jpg',
        category:'ramen',
        vegan:true
       },
       {
        title: 'Tsunami White Pearl',
        description:'Vegan vegetable broth: Impossible™ meat made from plants, green onion, red onion, spinach, broccolini, baby leaf, crispy garlic, garlic oil. Served with Thick Noodle.',
        price:9,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2021/09/tsunamiwhitepearl.png',
        category:'ramen',
        vegan:true
       },
       {
        title: 'JINYA Chicken Ramen',
        description:'chicken broth: chicken chashu, spinach, green onion and fried onion » served with thin noodles.',
        price:11,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/jrb_jinya-chicken_21_01_31_rgb_600x600.jpg',
        category:'ramen',
        vegan:false
       },
       {
        title: 'Spicy Chicken Ramen',
        description:'chicken broth: chicken chashu, spinach, spicy bean sprouts and green onion » served with thin noodles (Choose your spice level, MILD, SPICY or HOT.).',
        price:11,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/jrb_spicy-chicken_21_01_34_rgb_600x600.jpg',
        category:'ramen',
        vegan:false
       },
       {
        title: 'Wonton Chicken Ramen',
        description:'Chicken broth: wonton, spinach and green onion » served with thin noodles.',
        price:8,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/jrb_wonton-chicken_21_01_41_rgb_600x600.jpg',
        category:'ramen',
        vegan:false
       },
       {
        title: 'JINYA Tonkotsu Black',
        description:'Pork broth: pork chashu, kikurage, green onion, nori dried seaweed, seasoned egg*, garlic chips, garlic oil, fried onion and spicy sauce » served with thin noodles.',
        price:13,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/jrb_ramen_tonkotsu-black_22_01_5_rgb-800x800-1-600x600.jpg.',
        category:'ramen',
        vegan:false
       },
       {
        title: 'Tonkotsu Spicy',
        description:'Pork broth: pork chashu, spicy bean sprouts, kikurage, green onion and spicy sauce » served with thick noodles.',
        price:12,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/jrb_ramen_tonkotsu-spicy_22_01_3_rgb-800x800-1-600x600.jpg',
        category:'ramen',
        vegan:false
       },
       {
        title: 'Yuzu Shio Delight',
        description:'Chicken & pork clear broth: pork chashu, green onion, spinach, seasoned egg*, nori seaweed with yuzu flavor. Served with thin noodles.',
        price:12,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2021/12/jrb_yuzu-shio_21_01_54_rgb_600x600.jpg',
        category:'ramen',
        vegan:false
       },
       {
        title: 'Premium Tonkotsu Red',
        description:'pork broth: pork chashu, kikurage, green onion, seasoned egg*, nori dried seaweed, red hot chili oil and spicy bean sprouts » served with thick noodles.',
        price:15,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/jrb_ramen_premium-tonkotsu-red_22_01_6_rgb-800x800-1-600x600.jpg',
        category:'ramen',
        vegan:false
       },
       {
        title: 'JINYA Tonkotsu Original 2010',
        description:'Pork broth: pork chashu, green onion, spinach, seasoned egg*, nori dried seaweed. Served with extra thick noodles.',
        price:14,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2021/09/jrb_ramen_tonkotsu-original-2010_22_01_5_rgb-800x800-1-600x600.jpg',
        category:'ramen',
        vegan:false
       },
       {
        title: 'Shrimp Wonton Ramen',
        description:'Pork and shrimp broth: shrimp & chicken wonton, green onion and kikurage » served with thick noodles',
        price:14,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/shrimpwontonramen.png',
        category:'ramen',
        vegan:false
       },
       {
        title: 'Spicy Umami Miso Ramen',
        description:'Pork broth: ground pork soboro, bean sprouts, green onion, bok choy and chili oil » served with thick noodles',
        price:16,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/shrimpwontonramen.png',
        category:'ramen',
        vegan:false
       },
       {
        title: 'Impossible™ Gyoza',
        description:'Gyoza stuffed with delicious, savory Impossible™ meat made from plants.',
        price:10,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2021/12/jrb_impossible-gyoza_21_01_16_rgb_600x600.jpg',
        category:'small-plates',
        vegan:true
       },
       {
        title: 'Brussels Sprouts Tempura',
        description:'Crispy tempura brussels sprouts with white truffle oil.',
        price:8,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/brusselssprouts-600x600.png',
        category:'small-plates',
        vegan:true
       },
       {
        title: 'Edamame',
        description:'Lightly salted boiled soy beans',
        price:5,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/edamame-1-600x600-1.jpg',
        category:'small-plates',
        vegan:true
       },
       {
        title: 'Garlic Shrimp Spring Roll',
        description:'Flavorful garlic shrimp tucked inside a spring roll wrapper ',
        price:5,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2023/02/jrb_garlic-shrimp-spring-roll_22_01_2_rgb_800x800_web-menu-600x600.jpg',
        category:'small-plates',
        vegan:false
       },
       {
        title: 'Pork Gyoza (6 pcs)',
        description:'Flavorful garlic shrimp tucked inside a spring roll wrapper ',
        price:12,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/gyoza-600x600.png',
        category:'small-plates',
        vegan:false
       },
       {
        title: 'JINYA Bun',
        description:'Steamed bun stuffed with slow-braised pork chashu, cucumber and baby mixed greens served with JINYA’s original bun sauce and Kewpie mayonnaise',
        price:10,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/jinyabun-600x600.png',
        category:'small-plates',
        vegan:false
       },
       {
        title: 'Impossible™ Bun',
        description:'Plant-base bun: Impossible™ meat made from plants, guacamole, cucumber with vegan mayonnaise. Vegetarian',
        price:11,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/jinyabun-600x600.png',
        category:'small-plates',
        vegan:true
       },
       {
        title: 'Crispy Chicken',
        description:'juicy fried chicken thigh served with mixed baby greens and JINYA’s original ponzu sauce',
        price:8,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/crispychicken-1-600x600-1.jpg',
        category:'small-plates',
        vegan:false
       },
       {
        title: 'Caramelized Cauliflower',
        description:'Caramelized cauliflower with toasted pine nuts, crispy mint leaves, and lime sauce.',
        price:6,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/caramelizedcauliflower-1.jpg',
        category:'small-plates',
        vegan:true
       },
       {
        title: 'Takoyaki - Octopus Ball',
        description:'Battered octopus over egg tartar topped with kewpie mayonnaise, okonomiyaki sauce, fresh cut green onion and smoked bonito flakes.',
        price:12,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/jrb_takoyaki_21_01_47_rgb_600x600.jpg',
        category:'small-plates',
        vegan:false
       },
       {
        title: 'Spicy Creamy Shrimp Tempura',
        description:'Crispy shrimp tempura tossed in JINYA’s original spicy mayonnaise done in the classic “ebi-mayo” style',
        price:8,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/spicycreamyshrimptempura-1-600x600-1.jpg',
        category:'small-plates',
        vegan:false
       },
       {
        title: 'Jalapeño Butter Corn',
        description:'Fresh white corn sautéed with jalapeño and a delicate butter soy sauce',
        price:8,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/12/jalapenobuttercorn2-600x600.jpg',
        category:'small-plates',
        vegan:true
       },
       {
        title: 'Crispy Rice with Spicy Tuna',
        description:'Crispy grilled sushi rice topped with spicy tuna. garnished with sliced Serrano pepper',
        price:7,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/12/spicytunacrispyrice2-600x600.jpg',
        category:'small-plates',
        vegan:false
       },
       {
        title: 'Sautéed Broccolini',
        description:'Sautéed broccolini with crispy white quinoa.',
        price:7,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2021/07/sauteedbroccolini-600x600.png',
        category:'small-plates',
        vegan:false
       },
       {
        title: 'Sautéed Shishito Pepper',
        description:'Shishito peppers sautéed with garlic soy sauce. Garnished with bonito flakes.',
        price:9,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/12/sauteedshishitopepper2-600x600.jpg',
        category:'small-plates',
        vegan:false
       },
       {
        title: 'Pork Spare Ribs',
        description:'Braised pork baby back ribs with JINYA original BBQ sauce.',
        price:12,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2021/07/porkribs-600x600.png',
        category:'small-plates',
        vegan:false
       },
       {
        title: 'JINYA Quinoa Salad',
        description:'Baby greens, green kale, broccoli and white quinoa, kidney beans, garbanzo beans tossed with goma sesame dressing, corn and cherry tomatoes.',
        price:8,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/quinoasalad-600x600-1.jpg',
        category:'salads',
        vegan:true
       },
       {
        title: 'House Salad',
        description:'Baby arugula, kale and baby mix green with Japanese dressing.',
        price:7,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/housesalad2-600x600.jpg',
        category:'salads',
        vegan:false
       },
       {
        title: 'Seaweed Salad',
        description:'Lightly seasoned mixed seaweed salad with baby mixed greens',
        price:9,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/seaweedsalad-1-600x600.png',
        category:'salads',
        vegan:true
       },
       {
        title: 'Pork Chashu Bowl',
        description:'Slow-braised pork chashu, spinach, green onion, seasoned egg* and sesame seeds',
        price:17,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/porkchashubowl-600x600-1.jpg',
        category:'rice-bowls-and-curry',
        vegan:false
       },
       {
        title: 'Chicken Chashu Bowl',
        description:'Slow-braised chicken breast “chashu”, ground chicken soboro, spinach, green onion, seasoned egg*, sesame seeds',
        price:15,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/chickenbowl-600x600-1.jpg',
        category:'rice-bowls-and-curry',
        vegan:false
       },
       {
        title: 'Impossible™ Rice Bowl',
        description:'Plant-based rice bowl: Impossible™ crispy chickpeas, kale, pickled red cabbage, crispy garlic and roasted pine nuts over steamed rice with vegan curry ranch dressing.',
        price:13,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/impossiblebowl.png',
        category:'rice-bowls-and-curry',
        vegan:true
       },
       {
        title: 'California Poke Bowl',
        description:'Salmon, spicy tuna, shrimp, seaweed salad, masago, avocado, cilantro.',
        price:13,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/pokebowl-600x600-1.jpg',
        category:'rice-bowls-and-curry',
        vegan:false
       },
       {
        title: 'Tokyo Curry Rice',
        description:'Tokyo style curry w/ ground chicken and steamed rice',
        price:13,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/tokyocurrybowl-e1591676964548.jpg',
        category:'rice-bowls-and-curry',
        vegan:false
       },
       {
        title: 'Mochi Ice Cream',
        description:'Choice of green tea, chocolate',
        price:13,
        image:'https://z5r3u2r9.stackpathcdn.com/cms/wp-content/uploads/2020/02/greenteamochi-600x600-1.jpg',
        category:'dessert',
        vegan:false
       },




    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
