class $http {

    success(a, b) {
        console.log("Runned1");
        return this;//{distance2: function() {console.log("VALID?")}};
    }

    error(a, b) {
        console.log("Runned2");
        return this;
    }
}

let object_instance = new Runner;
object_instance.distance().distance2().distance();