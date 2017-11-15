class Server {
    constructor(url){
        this.url = url;
    }

    ApiCall(callback){
        $.get( this.url , function( data ) {
            return callback(data);
          });
    }
}