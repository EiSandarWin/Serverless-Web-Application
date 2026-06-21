## Serverless Web Application

## Project Overview

A serverless web application built on AWS. The website is hosted on Amazon S3 and delivered through CloudFront. When a user clicks the button, AWS Lambda updates a counter stored in DynamoDB and returns the latest value to the webpage.

## Architecture
![](Screenshots/serverless_web_application.drawio.png)

<details>
<summary>Click here to view Configuration and Results</summary>
  
| Description | Config | Screenshot |
|-------------|:--------|------------|
| **Route 53**   | 1. Created S3 bucket <br> 2. Uploaded static website files <br> 3. Enabled website hosting | |
| **CloudFront** | 1. Created CloudFront distribution <br> 2. Connected S3 bucket as origin <br> 3. Enabled HTTPS | ![](Screenshots/CloudFront_Distribution.png) |
| S3 bucket | 1. Created S3 bucket <br> 2. Uploaded static website files <br> 3. Enabled website hosting | ![](Screenshots/S3_bucket.png) |
| Lambda | 1. Created Python Lambda function <br> 2. Connected Lambda to DynamoDB <br> 3. Enabled Function URL | ![](Screenshots/Lambda.png) |
| DynamoDB | 1. Created DynamoDB table <br> 2. Partition Key: id <br> 3. Stored visitor counter | ![](Screenshots/DynamoDB.png) |


## Website
![](Screenshots/Website.png) 

</details>

## Technologies Used

* Amazon S3
* Amazon CloudFront
* AWS Lambda
* Amazon DynamoDB
* Amazon Route 53
* HTML
* CSS
* JavaScript
* Python



