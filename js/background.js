/// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Global accessor that the popup uses.
var recipes = {};
var selectedRecipe = null;
var selectedId = null;

function updateRecipe(tabId) {
  chrome.tabs.sendRequest(tabId, {}, function(recipe) {
    recipes[tabId] = recipe;
    if (!recipe) {
      chrome.pageAction.hide(tabId);
    } else {
      chrome.pageAction.show(tabId);
      if (selectedId == tabId) {
        updateSelected(tabId);
      }
    }
  });
}

function updateSelected(tabId) {
  selectedRecipe = recipes[tabId];
  if (selectedRecipe)
    chrome.pageAction.setTitle({tabId:tabId, title:selectedRecipe});
}

chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
  if (change.status == "complete") {
    updateRecipe(tabId);
  }
});

chrome.tabs.onSelectionChanged.addListener(function(tabId, info) {
  selectedId = tabId;
  updateSelected(tabId);
});

// Ensure the current selected tab is set up.
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  updateRecipe(tabs[0].id);
});