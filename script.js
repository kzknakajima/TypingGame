
const quotes = [
    'If today were the last day of my life, would I want to do what I am about to do today?',
    'It’s only by saying no that you can concentrate on the things that are really important.',
    'I’m as proud of what we don’t do as I am of what we do.',
    'Do you want to spend the rest of your life selling sugared water, or do you want a chance to change the world?',
    'If you live each day as if it was your last, someday you’ll most certainly be right.',
    'You can’t just ask customers what they want and then try to give that to them. By the time you get it built, they’ll want something new.',
    'A lot of times, people don’t know what they want until you show it to them.',
    'Simple can be harder than complex.',
    'The only way to do great work is to love what you do.',
    'Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma.',
    'Stay hungry. Stay foolish.',
];

const quotes_ja = [
    'もし今日が人生最後の日だったとしたら、今やろうとしていることをやるだろうか？',
    'ただ、Noと言うことで、あなたは本当に重要なことに集中することができる。',
    '私はやっていることと同じくらいやっていないことに誇りをもっている。',
    '砂糖水を売ることに君の一生を費やしたいのかい？それとも世界を変えたいのかい？',
    '今日が人生最後の日だと思って毎日を過ごせば、いつの日かきっと正しい自分になっているだろう。',
    '顧客に何がほしいか聞いてそれを与えようとするだけではいけない。それが完成した頃には顧客はさらに新しいものを欲しがっているだろう。',
    'ほとんどの場合、人々は形にして見せてもらうまで、自分が何をほしいのかをわかっていない。',
    '複雑さはシンプルさよりも難しくできている。',
    '優れた仕事をするたった一つの方法はその仕事を愛することだ。',
    'あなたの時間は限られているので、誰かの人生を生きてはいけない。ドグマ（常識・信教）にかかってはいけない。',
    'ハングリーであれ。バカであれ。',
];

let words = [];
let wordIndex = 0;

// 開始時刻
let startTime = Date.now();

const quoteElement = document.getElementById('quote');
const quote_jaElement = document.getElementById('quote_ja');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');

document.getElementById('start').addEventListener('click', ()=> {
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[quoteIndex];
    const quote_ja = quotes_ja[quoteIndex];
    quote_jaElement.innerText = quote_ja;

    words = quote.split(' ');
    wordIndex = 0;

    const spanWords = words.map(function(word) {return `<span>${word} </span>`});
    quoteElement.innerHTML = spanWords.join('');
    quoteElement.childNodes[wordIndex].className = 'highlight';//0をwordIndexに修正

    messageElement.innerText = '';
    typedValueElement.value = '';

    typedValueElement.focus();

    startTime = new Date().getTime();
})

typedValueElement.addEventListener('input', ()=> {
    const currentWord = words[wordIndex];
    const typedValue = typedValueElement.value;

    if (typedValue.endsWith(' ') && typedValue.trim() == currentWord){
        typedValueElement.value = '';
        quoteElement.childNodes[wordIndex].className = '';

        wordIndex++;
        quoteElement.childNodes[wordIndex].className = 'highlight';

    } else if (!currentWord.startsWith(typedValue)){
        typedValueElement.className = 'error';

    } else if (currentWord.startsWith(typedValue)){
        typedValueElement.className = '';
    }
    
    if (typedValue == currentWord && wordIndex == words.length - 1){
        messageElement.innerText = `CONGRATULATIONS!!`;
        typedValueElement.value = '';
        quoteElement.childNodes[wordIndex].className = '';
    }

})