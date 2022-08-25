# PortfolioWebsite
This project represents my portfolio website code at www.robinvc.be

# Software

Platforms:
* Amazon Web services (AWS)
    * S3 Bucket
    * Route 53
    * ACM: Amazon certificate manager
    * Amazon CloudFront

Versions:
* Angular: v14.0.0
* Nodejs: v16.15.1
* Bootstrap: v5.2.0

# Testing the website

If you have setup your aws serverless static website by making use of S3 buckets and Route 53 you can test and deploy your code using:
```
ng build && npm run aws-deploy
```

# Known Bugs

# References

* A Personal fix for using 2 github accounts which messes with my permissions to git repo's: https://stackoverflow.com/questions/56343485/visual-studio-code-and-git-permission-denied-to-x
* Helped me setup the serverless website on aws: https://medium.com/serverlessguru/deploying-angular-to-aws-in-seconds-or-10-minutes-941faa8c0aab
* Helped me setup and host a static website using an S3 bucket: https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html#website-hosting-custom-domain-walkthrough-domain-registry
* Setting up https on my website with SSL public certification using Amazon Cloudfront: https://adamtheautomator.com/aws-s3-static-ssl-website/
* Introduction tutorial to angular: https://www.youtube.com/watch?v=k5E2AVpwsko