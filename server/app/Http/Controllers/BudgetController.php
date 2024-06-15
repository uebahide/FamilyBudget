<?php

namespace App\Http\Controllers;

use App\Http\Requests\BudgetRequest;
use Illuminate\Http\Request;
use App\Models\Budget;
use Illuminate\Support\Facades\Log;


class BudgetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $budgets = Budget::all();

        return $budgets;
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(BudgetRequest $request)
    {
        Log::info('Request Data:', $request->validated());
        return Budget::create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Budget::findOrFail($id);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(BudgetRequest $request, Budget $budget)
    {
        $budget->update($request->validated());
        return $budget;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Budget $budget)
    {
        $budget->delete();
        return response(null, 204);
    }
}
