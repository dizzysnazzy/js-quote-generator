let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"A real friend is one who walks in when the rest of the world walks out."',
    person: '— Walter Winchell'
},{
    quote: '"Lots of people want to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down."',
    person: '— Oprah Winfrey'
},{
    quote: '"If you live to be a hundred, I hope I live to be a hundred minus one day, so I never have to live without you."',
    person: '— Winnie the Pooh'
},{
    quote: '"Things are never quite as scary when you\'ve got a best friend."',
    person: '— Bill Watterson, Calvin and Hobbes'
},{
    quote: '"Real friendship is when your friend comes over to your house and then you both just take a nap."',
    person: '— Anonymous'
},{
    quote: '"Friendship is born at that moment when one person says to another, \'What! You too? I thought I was the only one.\'"',
    person: '- C.S. Lewis'
},{
    quote: '"Don\'t make friends who are comfortable to be with. Make friends who will force you to lever yourself up."',
    person: '- Thomas J. Watson'
},{
    quote: '"Friendship marks a life even more deeply than love. Love risks degenerating into obsession, friendship is never anything but sharing."',
    person: '― Elie Wiesel'
},{
    quote: '"Friendship is the hardest thing in the world to explain. It\'s not something you learn in school. But if you haven\'t learned the meaning of friendship, you really haven\'t learned anything."',
    person: '- Muhammad Ali'
},{
    quote: '"A true friend never gets in your way unless you happen to be going down."',
    person: '- Arnold H. Glasgow'
}, ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})