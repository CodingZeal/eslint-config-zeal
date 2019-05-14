// eslint-disable-next-line import/no-unused-modules
module.exports = {
  plugins: ["ramda"],
  rules: {
    // Detects when always usage can be replaced by a Ramda function
    "ramda/always-simplification": "warn",
    // Suggests simplifying list of negations in anyPass by single negation in allPass
    "ramda/any-pass-simplification": "warn",
    //  Suggests transforming negated both conditions on negated either
    "ramda/both-simplification": "warn",
    // Forbids confusing complement, suggesting a better one
    "ramda/complement-simplification": "warn",
    // Enforces compose for single line expression and pipe for multiline
    "ramda/compose-pipe-style": "off",
    // Detects when a function that has the same behavior already exists
    "ramda/compose-simplification": "warn",
    // Forbids using cond when ifElse, either or both fits
    "ramda/cond-simplification": "warn",
    // Suggests transforming negated either conditions on negated both
    "ramda/either-simplification": "warn",
    // Forbids eqBy(prop(_)) and suggests eqProps
    "ramda/eq-by-simplification": "warn",
    // Forbids using negated filter and suggests reject
    "ramda/filter-simplification": "warn",
    // Suggests when and unless when it is possible to replace
    "ramda/if-else-simplification": "warn",
    // Forbids map(prop(_)) and suggests pluck
    "ramda/map-simplification": "warn",
    // Forbids merge when assoc fits
    "ramda/merge-simplification": "warn",
    // Forbids and with 2 parameters in favor of &&
    "ramda/no-redundant-and": "warn",
    // Forbids not with 1 parameter in favor of !
    "ramda/no-redundant-not": "warn",
    // Forbids or with 2 parameters in favor of ||
    "ramda/no-redundant-or": "warn",
    // Detects when a function that has the same behavior already exists
    "ramda/pipe-simplification": "warn",
    // Enforces using both/either instead of allPass/anyPass with a list of only two predicates
    "ramda/prefer-both-either": "warn",
    // Enforces using complement instead of compositions using not
    "ramda/prefer-complement": "warn",
    // Enforces using R.T and R.F instead of explicit functions
    "ramda/prefer-ramda-boolean": "warn",
    // Detects when can replace propSatisfies by more simple functions
    "ramda/prop-satisfies-simplification": "warn",
    // Detects when can replace reduce by sum or product
    "ramda/reduce-simplification": "warn",
    // Forbids using negated reject and suggests filter
    "ramda/reject-simplification": "warn",
    // Forbids using set with lensProp in favor of assoc
    "ramda/set-simplification": "warn",
    // Forbids using negated unless and suggests when
    "ramda/unless-simplification": "warn",
    // Forbids using negated when and suggests unless
    "ramda/when-simplification": "warn",
  },
};
