// Copyright 2024 New Vector Ltd.
// Copyright 2023, 2024 The Matrix.org Foundation C.I.C.
//
// SPDX-License-Identifier: AGPL-3.0-only
// Please see LICENSE in the repository root for full details.

import "knex/types/result";

declare module "knex/types/result" {
  interface Registry {
    Count: number;
  }
}
