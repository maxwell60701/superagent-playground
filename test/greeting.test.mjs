import { test } from 'node:test';
import assert from 'node:assert/strict';
import { greeting } from '../src/greeting.mjs';

test('greets a named person', () => assert.equal(greeting('Alice'), 'Hello, Alice!'));
test('trims names', () => assert.equal(greeting(' Alice '), 'Hello, Alice!'));
test('uses world when a name is empty', () => assert.equal(greeting('  '), 'Hello, world!'));
