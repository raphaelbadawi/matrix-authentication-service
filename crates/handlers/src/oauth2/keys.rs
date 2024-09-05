// Copyright 2024 New Vector Ltd.
// Copyright 2021-2024 The Matrix.org Foundation C.I.C.
//
// SPDX-License-Identifier: AGPL-3.0-only
// Please see LICENSE in the repository root for full details.

use axum::{extract::State, response::IntoResponse, Json};
use mas_keystore::Keystore;

#[tracing::instrument(name = "handlers.oauth2.keys.get", skip_all)]
pub(crate) async fn get(State(key_store): State<Keystore>) -> impl IntoResponse {
    let jwks = key_store.public_jwks();
    Json(jwks)
}
