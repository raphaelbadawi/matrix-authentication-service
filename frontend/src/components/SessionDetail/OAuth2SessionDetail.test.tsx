// Copyright 2024 New Vector Ltd.
// Copyright 2023, 2024 The Matrix.org Foundation C.I.C.
//
// SPDX-License-Identifier: AGPL-3.0-only
// Please see LICENSE in the repository root for full details.

// @vitest-environment happy-dom

import { render, cleanup } from "@testing-library/react";
import { Provider } from "urql";
import { describe, expect, it, afterEach, beforeAll } from "vitest";
import { never } from "wonka";

import { makeFragmentData } from "../../gql";
import { mockLocale } from "../../test-utils/mockLocale";
import { DummyRouter } from "../../test-utils/router";

import OAuth2SessionDetail, { FRAGMENT } from "./OAuth2SessionDetail";

describe("<OAuth2SessionDetail>", () => {
  const mockClient = {
    executeQuery: (): typeof never => never,
  };

  const baseSession = {
    id: "session-id",
    scope:
      "openid urn:matrix:org.matrix.msc2967.client:api:* urn:matrix:org.matrix.msc2967.client:device:abcd1234",
    createdAt: "2023-06-29T03:35:17.451292+00:00",
    finishedAt: null,
    lastActiveAt: "2023-07-29T03:35:17.451292+00:00",
    lastActiveIp: "1.2.3.4",
    userAgent: null,
    client: {
      id: "test-id",
      clientId: "test-client-id",
      clientName: "Element",
      clientUri: "https://element.io",
      logoUri: null,
    },
  };

  beforeAll(() => mockLocale());
  afterEach(cleanup);

  it("renders session details", () => {
    const data = makeFragmentData(baseSession, FRAGMENT);

    const { asFragment, getByText, queryByText } = render(
      <Provider value={mockClient}>
        <DummyRouter>
          <OAuth2SessionDetail session={data} />
        </DummyRouter>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(queryByText("Finished")).toBeFalsy();
    expect(getByText("Sign out")).toBeTruthy();
  });

  it("renders a finished session details", () => {
    const data = makeFragmentData(
      {
        ...baseSession,
        finishedAt: "2023-07-29T03:35:17.451292+00:00",
      },
      FRAGMENT,
    );

    const { asFragment, getByText, queryByText } = render(
      <Provider value={mockClient}>
        <DummyRouter>
          <OAuth2SessionDetail session={data} />
        </DummyRouter>
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText("Finished")).toBeTruthy();
    expect(queryByText("Sign out")).toBeFalsy();
  });
});
