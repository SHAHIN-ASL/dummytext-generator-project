const dummyText = [
    'Lollipop pastry tiramisu gummi bears macaroon fruitcake. Gingerbread marshmallow dessert toffee apple pie topping dragée. Candy lemon drops toffee chupa chups powder sweet sesame snaps sugar plum. Cheesecake dragée gummies sugar plum chocolate bar tiramisu. Candy candy chocolate cake shortbread gingerbread sweet roll bonbon apple pie sweet roll. Bonbon powder fruitcake chocolate bar wafer. Caramels soufflé jujubes cake jujubes pastry lollipop ice cream danish.','Pie chocolate candy canes jujubes chupa chups donut fruitcake marzipan fruitcake. Jujubes dessert sugar plum biscuit brownie. Jelly sugar plum chocolate bar tart macaroon macaroon croissant. Oat cake croissant gingerbread bear claw oat cake lemon drops. Halvah gummi bears soufflé lemon drops jelly beans liquorice donut sugar plum. Wafer apple pie oat cake candy brownie sugar plum cookie halvah tootsie roll. Gingerbread liquorice lemon drops jelly beans candy. Cotton candy cotton candy brownie icing lollipop. Ice cream sweet roll chocolate cake carrot cake ice cream jelly-o.','Dessert pastry chupa chups jujubes toffee pie cake chocolate bar. Cake danish carrot cake apple pie croissant topping gummies biscuit. Bonbon cupcake macaroon cotton candy sesame snaps. Gummi bears fruitcake chupa chups shortbread marshmallow lollipop. Jelly-o gummies liquorice apple pie donut lemon drops carrot cake. Cheesecake tootsie roll chocolate cake toffee liquorice pastry dragée croissant. Shortbread candy canes sweet chocolate apple pie muffin jelly-o brownie. Gummi bears candy carrot cake chocolate cake dragée.','Cupcake jelly donut shortbread marshmallow chocolate. Tootsie roll cotton candy lollipop jelly muffin gingerbread shortbread. Cake tiramisu macaroon tiramisu dessert. Sesame snaps chupa chups sweet roll caramels ice cream. Pie marzipan lollipop chupa chups oat cake. Candy canes halvah sweet ice cream donut icing caramels cheesecake. Muffin tiramisu carrot cake fruitcake jelly-o.',
    'Sweet tart marshmallow danish sweet roll halvah topping. Macaroon cake toffee sugar plum donut ice cream candy canes. Powder carrot cake jelly beans cake caramels cookie chocolate jujubes. Tiramisu caramels marzipan jelly-o macaroon danish. Soufflé cupcake candy canes halvah cake sweet wafer sweet. Gummies cake oat cake cotton candy dragée cookie bear claw tootsie roll. Jelly candy oat cake jelly cake. Chocolate marzipan gummies chocolate bar soufflé tiramisu soufflé oat cake. Muffin powder tart gummies soufflé toffee bear claw fruitcake. Chocolate bar jelly-o tootsie roll macaroon candy canes.',
    'Jelly-o croissant jujubes toffee donut icing bonbon chocolate bar. Bear claw topping biscuit candy canes chocolate bar pudding lemon drops chocolate bar. Jelly marzipan cotton candy cake icing gummi bears dragée dessert dragée. Tootsie roll topping chocolate cake marzipan jelly beans chocolate fruitcake chupa chups cake. Icing bear claw gingerbread jelly bear claw dragée toffee croissant icing. Brownie shortbread dragée wafer sesame snaps.',
    'Marshmallow liquorice jujubes marshmallow macaroon. Sweet marshmallow wafer lemon drops lollipop. Macaroon jelly beans lemon drops bear claw shortbread pie gummi bears gummi bears gingerbread. Pie cupcake carrot cake lollipop macaroon jelly-o. Cotton candy caramels caramels cupcake oat cake jelly marshmallow gingerbread. Liquorice muffin cotton candy chocolate toffee muffin liquorice.',
    'Tiramisu oat cake cake caramels gummi bears. Jujubes gummi bears tart jelly beans sesame snaps shortbread. Jelly-o caramels chocolate bar chocolate cake shortbread. Cheesecake cake powder croissant powder donut chocolate bar. Dessert cupcake sweet roll halvah lemon drops cookie. Chupa chups gummies jelly-o chupa chups danish candy canes. Sesame snaps soufflé topping sugar plum jelly beans. Sweet roll ice cream brownie cotton candy sweet candy canes sweet. Chocolate cake brownie danish halvah topping jelly-o cotton candy lemon drops.',
    'Sugar plum gummies muffin icing candy canes sesame snaps caramels. Candy halvah powder bear claw caramels icing cotton candy gummies sweet roll. Jelly chupa chups cake tootsie roll topping topping lollipop lemon drops brownie. Fruitcake apple pie topping danish carrot cake pudding sesame snaps apple pie cake. Sugar plum bear claw muffin cake marzipan. Sweet caramels tiramisu dragée chocolate cake candy sweet candy canes. Halvah ice cream tart tootsie roll bonbon cake toffee cheesecake. Dragée sweet donut chocolate bar candy canes.',
    'Lemon drops pie icing topping cake pie jujubes tootsie roll carrot cake. Croissant sweet soufflé tiramisu pie danish. Fruitcake apple pie tiramisu tiramisu sesame snaps. Chocolate cake liquorice dragée sesame snaps chocolate bar. Jelly-o jelly beans pudding danish gummies cupcake. Croissant sesame snaps pie marzipan caramels tiramisu chocolate biscuit tart. Lollipop cheesecake tiramisu jelly cupcake danish chupa chups candy gummies. Sugar plum pie muffin pie gingerbread. Shortbread muffin lollipop tootsie roll cake brownie pudding. Sesame snaps fruitcake chocolate gummi bears oat cake cotton candy.',
];

//Selecting elements / DOM Selection

const form = document.querySelector('#form');
const amount = document.querySelector('#amount');
const result = document.querySelector('#result');

// Event Listner

form.addEventListener('submit',function(e){
    e.preventDefault();

    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * dummyText.length);

    // For empty, negative and greater than 9
    if(isNaN(value) || value <= 0 || value > 9){
        result.innerHTML = `<p> ${dummyText[random]} </p>`;
    }else{
        const sliceArray = dummyText.slice(0,value);
        const finalArray = sliceArray.map(function(singleDummy){
            return `<p>${singleDummy}</p>`;

        }).join('');

        //Displaying final dummy Text

        result.innerHTML = finalArray;
      
    }

})