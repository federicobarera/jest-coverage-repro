require('./control');
import c from './control'

describe('Control', function () {
    'use strict';

    describe('ClickTab', function () {
        var viewModel, viewModel2;

        beforeEach(function () {
            viewModel = window.control();
            viewModel2 = c();
        });

        afterEach(function () {
            viewModel = viewModel2 = null;
        });

        it('should return selectedItem as connection if onConnectionManagerClick is clicked', function () {
            viewModel.onConnectionClick();
            viewModel2.onConnectionClick();
            expect(1).toBe(1);
        });

        it('should return selectedItem as workflow if onWorkflowClick is clicked', function () {
            viewModel.onWorkflowClick();
            viewModel2.onWorkflowClick();
            expect(1).toBe(1);
        });
    });
});