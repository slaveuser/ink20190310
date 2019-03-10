import React from 'react';
import test from 'ava';
import {Box} from '..';
import renderToString from './helpers/render-to-string';

test('direction row', t => {
	const output = renderToString(
		<Box flexDirection="row">
			<Box>A</Box>
			<Box>B</Box>
		</Box>
	);

	t.is(output, 'AB');
});

test('direction row reverse', t => {
	const output = renderToString(
		<Box flexDirection="row-reverse" width={4}>
			<Box>A</Box>
			<Box>B</Box>
		</Box>
	);

	t.is(output, '  BA');
});

test('direction column', t => {
	const output = renderToString(
		<Box flexDirection="column">
			<Box>A</Box>
			<Box>B</Box>
		</Box>
	);

	t.is(output, 'A\nB');
});

test('direction column reverse', t => {
	const output = renderToString(
		<Box flexDirection="column-reverse" height={4}>
			<Box>A</Box>
			<Box>B</Box>
		</Box>
	);

	t.is(output, '\n\nB\nA');
});
