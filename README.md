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
* Bootstrap 5 js not working in angular: https://www.youtube.com/watch?v=sz6zcBwPWnU
* Video background in html: https://www.w3schools.com/howto/howto_css_fullscreen_video.asp
* Bootstrap 5 Cards documentation: https://getbootstrap.com/docs/5.0/components/card/
* Auto play of video's on refresh not working: https://stackoverflow.com/questions/53756695/angular-html-fullscreen-video-autoplay-not-working
* Setting up a barchart in Angular: https://www.youtube.com/watch?v=N1kbXS4tjMw
* Radar Chart and official ng2-charts docu: https://valor-software.com/ng2-charts/#/RadarChart
* Website design inspired on this React website: https://github.com/ryantran2165/ryantran2165.github.io
* Applying filters to an array in Angular: https://stackoverflow.com/questions/34164413/how-to-apply-filters-to-ngfor
* Applying filters to an array in Angular: https://www.youtube.com/watch?v=YTCBV9dhZ54
* Don't forget to import this module to use ngModel: https://stackoverflow.com/questions/43298011/angular-error-cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-inpu
* Filtering dropdown menu in Angular: https://stackoverflow.com/questions/52645549/angular-filtering-with-dropdown