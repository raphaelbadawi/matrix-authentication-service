// Copyright 2024 New Vector Ltd.
// Copyright 2022-2024 Kévin Commaille.
//
// SPDX-License-Identifier: AGPL-3.0-only
// Please see LICENSE in the repository root for full details.

//! Methods to interact with OpenID Connect and OAuth2.0 endpoints.

pub mod account_management;
pub mod authorization_code;
pub mod client_credentials;
pub mod discovery;
pub mod introspection;
pub mod jose;
pub mod refresh_token;
pub mod registration;
pub mod revocation;
pub mod rp_initiated_logout;
pub mod token;
pub mod userinfo;
