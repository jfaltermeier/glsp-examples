/********************************************************************************
 * Copyright (c) 2019 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
// import { expect } from 'chai';
import "webdriverio";


describe('Workflow diagram', () => {

    it('should open the diagram via file explorer', () => {
        browser.waitUntil(() => $('.theia-preload').isDisplayed());
        browser.waitUntil(() => !$('.theia-preload').isDisplayed());
        browser.waitUntil(() => $('#shell-tab-explorer-view-container').isDisplayed());
        $('#shell-tab-explorer-view-container').click();
        $("div[title$='/example1.wf']").click();
        browser.waitUntil(() => $('#workflow-diagram_0_sprotty').isDisplayed());
        browser.waitUntil(() => $('.palette-body').isDisplayed());
        $('.tool-button').click();
        $('#workflow-diagram_0_sprotty').click();
        browser.waitUntil(() => $('text:contains(AutomatedTask10)').isDisplayed());
    });

});
