const viewButton = document.getElementById('viewButton');
const viewCountSpan = document.getElementById('viewCount');

const lambdaUrl =
    'https://cp4yog46trpsqzup4a2xg6nfnq0lohsj.lambda-url.ap-northeast-1.on.aws/';

viewButton.addEventListener('click', async () => {
    try {
        const response = await fetch(lambdaUrl);

        const data = await response.json();

        const body = JSON.parse(data.body);

        // Show the value returned from DynamoDB
        viewCountSpan.textContent = body.views;

    } catch (error) {
        console.error('Error:', error);
    }
});