window.control = function () { 
    function onWorkflowClick() {
        console.log('onclick');
    }

    function onConnectionClick() {
        console.log('onConnectionClick');
    }

    return {
        onWorkflowClick: onWorkflowClick,
        onConnectionClick: onConnectionClick
    };
}

export default window.control;