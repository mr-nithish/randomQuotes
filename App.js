var quotes =  ["If you're going through hell, keep going ... ",
"Optimism is the faith that leads to achievement ... ","Nothing can be done without hope and confidence ...",
"Our greatest weakness lies in giving up ... ","The most certain way to succeed is always to try just one more time ...",
"When something is important enough, you do it even if the odds are not in your favour ...",
"Life is just 10% what happens to you and 90% of the life is that how you react to it ...",
"Ever tries. Ever failed. No matter. Try again. Fail again. Fail better ...",
"We should not give up and we should not allow the problem to defeat us ..."]

function newQuote()
{
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNumber];
}