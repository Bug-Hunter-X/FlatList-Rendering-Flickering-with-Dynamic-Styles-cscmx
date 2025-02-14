# React Native FlatList Rendering Issue

This repository demonstrates a common issue encountered when using FlatList in React Native with dynamic styles and rapidly changing data. The problem manifests as flickering or incorrect rendering of list items.

## Bug Description
The `BugFlatList.js` file showcases a FlatList where list items receive dynamic styles based on their data. When the data updates frequently (simulated in this example), the FlatList's rendering becomes erratic, causing flickering and display inconsistencies.

## Solution
The `SolutionFlatList.js` file provides a solution using `useMemo` and `keyExtractor` to optimize the FlatList's rendering. By memoizing the dynamically generated styles and providing a unique key for each item, we significantly improve the rendering performance and prevent the flickering issue.