
<head>
    <!-- Web App Manifest-->
    <link rel="manifest" href="./manifest.json">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#0134d4">
    <link rel="apple-touch-icon" sizes="57x57" href="./img/icons/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="./img/icons/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="./img/icons/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="./img/icons/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="./img/icons/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="./img/icons/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="./img/icons/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="./img/icons/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="./img/icons/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="./img/icons/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="./img/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="./img/icons/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="./img/icons/favicon-16x16.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">

    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="./img/icons/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <!-- The above 4 meta tags *must* come first in the head; any other head content must come *after* these tags-->
    <!-- Title-->
    <title>WeChecked App</title>
    <!-- Fonts-->
    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet">

    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/animate.css">
    <link rel="stylesheet" href="./css/owl.carousel.min.css">
    <link rel="stylesheet" href="./css/font-awesome.min.css">
    <link rel="stylesheet" href="./css/bootstrap-icons.css">
    <link rel="stylesheet" href="./css/magnific-popup.css">
    <link rel="stylesheet" href="./css/ion.rangeSlider.min.css">
    <link rel="stylesheet" href="./css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="./css/apexcharts.css">
    <link rel="stylesheet" href="https://karmamgmt.com/wecheckbetav0.1/add_to_homescreen/style/addtohomescreen.css">
    <!-- Core Stylesheet-->
    <link rel="stylesheet" href="./style.css">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-189406159-1"></script>

<!--    <script>
        setTimeout(function () {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'UA-189406159-1');
        }, 5000);
    </script>
    -->
    <script src="https://www.gstatic.com/firebasejs/5.0.0/firebase.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script> 
    <link rel="manifest" href="https://karmamgmt.com/wecheckbetav0.1/manifest.json">

    <!-- Insert this script at the bottom of the HTML, but before you use any Firebase services -->
    <!-- <script src="https://karmamgmt.com/wecheckbetav0.1/firebase-messaging-sw.js"></script> -->

    <script type="module">
        import {
        initializeApp
        } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js'
    </script>
    <script>

        if ("serviceWorker" in navigator) {
            window.addEventListener("load", function () {
                // navigator.serviceWorker.register("/flutter_service_worker.js");
                navigator.serviceWorker.register("/firebase-messaging-sw.js");
            });
        }
        // Initialize Firebase
        var firebaseConfig = {
            apiKey: "AIzaSyDq4nhsinJX9ySpFLBbZCx2dVMZNb_IegI",
            authDomain: "wechecked-122ff.firebaseapp.com",
            projectId: "wechecked-122ff",
            storageBucket: "wechecked-122ff.appspot.com",
            messagingSenderId: "681126189908",
            appId: "1:681126189908:web:2c35e3b6ba927fcf9646c1",
            measurementId: "G-TB3K7RN3NH"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        // Retrieve Firebase Messaging object.
        const messaging = firebase.messaging();

messaging.requestPermission()
                .then(function () {

                    console.log('Notification permission granted.');

//                    debugger; 
                    // TODO(developer): Retrieve an Instance ID token for use with FCM.
                    if (isTokenSentToServer()) {
                        console.log('Token already saved.');
                    }
		    
                })
                .catch(function (err) {
                    console.log('Unable to get permission to notify.', err);

                });

        function getRegToken(argument) {
            messaging.getToken()
                    .then(function (currentToken) {
                        if (currentToken) {                            
                            saveToken(currentToken);
                            setTokenSentToServer(true);
                        } else {
                            console.log('No Instance ID token available. Request permission to generate one.');
                            setTokenSentToServer(false);
                        }
                    })
                    .catch(function (err) {
                        console.log('An error occurred while retrieving token. ', err);
                        setTokenSentToServer(false);
                    });
        }

        function setTokenSentToServer(sent) {
            window.localStorage.setItem('sentToServer', sent ? 1 : 0);
        }

        function currentTokenExist(currentToken, uid){
            $.ajax({
                url: 'https://karmamgmt.com/wecheckbetav0.1/fcm/fcm-push/check_userid.php',
                method: 'post',
                data: {token: currentToken, uid: uid}
            }).done(function (result) {
                if(result && result === '1'){
                    return true;
                }else{
                    return false;
                }
            });
        }
        
        function isTokenSentToServer(currentToken) {
//            debugger;
            var navigator_info = window.navigator,
              screen_info = window.screen,
              uid = navigator_info.mimeTypes.length;
                uid += navigator_info.userAgent.replace(/\D+/g, '');
                uid += navigator_info.plugins.length;
                uid += screen_info.height || '';
                uid += screen_info.width || '';
                uid += screen_info.pixelDepth || '';
                if(!currentToken){
                    currentToken = localStorage.getItem('currentToken');
                }


            if (window.localStorage.getItem('sentToServer') && 
                window.localStorage.getItem('sentToServer') == 1 &&
                window.localStorage.getItem('currentToken')) {
                $.ajax({
                     url: 'https://karmamgmt.com/wecheckbetav0.1/fcm/fcm-push/check_userid.php',
                     method: 'post',
                     data: {token: currentToken, uid: uid}
                 }).done(function (result) {
                     if(result && result == 1){

		 $.ajax({
				 url: 'https://karmamgmt.com/wecheckbetav0.1/fcm/fcm-push/check_email.php',
				 method: 'post',
				 data: {token: currentToken, uid: uid}
			 })

                         return true;
                     }else{
                         return getRegToken();
                     }
                 });
//                currentTokenExist(currentToken, uid);
            }else{
                return getRegToken();               
            }
        }

        function saveToken(currentToken) {
            var navigator_info = window.navigator,
                    screen_info = window.screen,
                    uid = navigator_info.mimeTypes.length;
            uid += navigator_info.userAgent.replace(/\D+/g, '');
            uid += navigator_info.plugins.length;
            uid += screen_info.height || '';
            uid += screen_info.width || '';
            uid += screen_info.pixelDepth || '';
            console.log(uid);
            console.log(currentToken);

            $.ajax({
                url: 'https://karmamgmt.com/wecheckbetav0.1/fcm/fcm-push/action.php',
                method: 'post',
                data: {token: currentToken, uid: uid},
error: function (error) {     
console.log('error; ' + error);
}
            }
	    ).done(function (result) {
                window.localStorage.setItem('currentToken', currentToken);
                console.log(result);
            });
        }

        messaging.onMessage(function (payload) {
            console.log("Message received. ", payload);
            notificationTitle = payload.data.title;
            notificationOptions = {
                body: payload.data.body,
                icon: payload.data.icon,
                vibrate: payload.data.vibrate,
                badge: payload.data.badge

            },
                    notification = new Notification(notificationTitle, notificationOptions);
        });
    </script>
</head>
