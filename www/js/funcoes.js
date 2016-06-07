/*var app = angular.module('MyApp', ['ngCordova']);
app.controller('MyCtrl', function($scope, $cordovaFileTransfer){
    $scope.upload = function() {
        var options = {
            fileKey: 'avatar',
            fileName: 'image.jpg',
            chunkedMode: false,
            mimeType: 'image/jpg'
        };
        
        $cordovaFileTransfer.upload("http://iorder.com.br/teste", "http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg", options).then(function(result){
            console.log("Sucesso: " + JSON.stringify(result.response));
            alert('SUCESSO: ' + JSON.stringify(result.response))
        }, function(err){
            console.log("Erro: " + JSON.stringify(err));
            alert('ERRO: ' + JSON.stringify(err));
        }, function(progress){
            
        });
    }
});*/

// Wait for PhoneGap to load
        document.addEventListener("deviceready", onDeviceReady, false);
 
        // PhoneGap is ready
        function onDeviceReady() {
 		// Do cool things here...
        }
 
        function getImage() {
            // Retrieve image file location from specified source
            navigator.camera.getPicture(uploadPhoto, function(message) {
			alert('get picture failed');
		},{
			quality: 50, 
			destinationType: navigator.camera.DestinationType.FILE_URI,
			sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
		}
            );
 
        }
 
        function uploadPhoto(imageURI) {
            var options = new FileUploadOptions();
            options.fileKey="file";
            options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
            options.mimeType="image/jpeg";
 
            var params = new Object();
            params.value1 = "test";
            params.value2 = "param";
 
            options.params = params;
            options.chunkedMode = false;
 
            var ft = new FileTransfer();
            ft.upload(imageURI, "http://seusite.com.br/upload.php", win, fail, options);
        }
 
        function win(r) {
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
            alert(r.response);
        }
 
        function fail(error) {
            alert("An error has occurred: Code = " = error.code);
        }